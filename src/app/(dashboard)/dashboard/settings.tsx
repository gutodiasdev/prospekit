'use client';

import { removeTeamMember } from '@/src/app/(login)/actions';
import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { TeamDataWithMembers, User } from '@/src/lib/db/schema';
import { customerPortalAction } from '@/src/lib/payments/actions';
import { ExternalLink } from 'lucide-react';
import { useActionState } from 'react';
import { InviteTeamMember } from './invite-team';

type ActionState = {
  error?: string;
  success?: string;
};

export function Settings({ teamData }: { teamData: TeamDataWithMembers }) {
  const [removeState, removeAction, isRemovePending] = useActionState<
    ActionState,
    FormData
  >(removeTeamMember, { error: '', success: '' });

  const getUserDisplayName = (user: Pick<User, 'id' | 'name' | 'email'>) => {
    return user.name || user.email || 'Unknown User';
  };

  return (
    <section className="flex-1 p-4 lg:p-8">
      <h1 className="text-lg lg:text-2xl font-medium mb-6">Configurações do time</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Inscrição do time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="mb-4 sm:mb-0">
                <p className="font-medium">
                  Plano atual: {teamData.planName || 'Gratuito'}
                </p>
                <p className="text-sm text-muted-foreground">
                  {teamData.subscriptionStatus === 'active'
                    ? 'Cobrado mensalmente'
                    : teamData.subscriptionStatus === 'trialing'
                      ? 'Período de teste'
                      : 'Sem inscrição ativa'}
                </p>
              </div>
              <form action={customerPortalAction}>
                <Button type="submit" variant="outline" className='flex items-center gap-2'>
                  Administrar inscrição
                  <ExternalLink className='w-4 h-4' />
                </Button>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Membros do time</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {teamData.teamMembers.map((member, index) => (
              <li key={member.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage
                      src={`/placeholder.svg?height=32&width=32`}
                      alt={getUserDisplayName(member.user)}
                    />
                    <AvatarFallback>
                      {getUserDisplayName(member.user)
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">
                      {getUserDisplayName(member.user)}
                    </p>
                    <p className="text-sm text-muted-foreground capitalize">
                      {member.role}
                    </p>
                  </div>
                </div>
                {index > 1 ? (
                  <form action={removeAction}>
                    <input type="hidden" name="memberId" value={member.id} />
                    <Button
                      type="submit"
                      variant="outline"
                      size="sm"
                      disabled={isRemovePending}
                    >
                      {isRemovePending ? 'Removing...' : 'Remove'}
                    </Button>
                  </form>
                ) : null}
              </li>
            ))}
          </ul>
          {removeState?.error && (
            <p className="text-red-500 mt-4">{removeState.error}</p>
          )}
        </CardContent>
      </Card>
      <InviteTeamMember />
    </section>
  );
}
