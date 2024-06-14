import React from 'react'
import AuthSignUpFormComponent from './form'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AuthSignUpPage() {
  return (
    <div className='flex h-screen'>
      <Card className='m-auto w-5/6 sm:max-w-[450px]'>
        <CardHeader>
          <CardTitle>Cadastre-se</CardTitle>
          <CardDescription>Informe os campos abaixo para se cadastrar</CardDescription>
        </CardHeader>
        <AuthSignUpFormComponent />
      </Card>
    </div>
  )
}
