import React from 'react'
import AuthSignInFormComponent from './form'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AuthPage() {
  return (
    <div className='flex h-screen'>
      <Card className='m-auto'>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Informe as credenciais para acessar</CardDescription>
        </CardHeader>
        <AuthSignInFormComponent />
      </Card>
    </div>
  )
}
