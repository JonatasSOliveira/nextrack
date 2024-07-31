import React, { Suspense } from 'react'
import ContainerWithNav from '../container-with-nav/container-with-nav'
import Link from 'next/link';
import ListComponent, { ListComponentProps } from './list-component';

interface DefaultListPageProps extends ListComponentProps{
  title: string;
  newRegisterLabel: string
}

export default function DefaultListPage({title, newRegisterLabel, formUrl, ...props}: DefaultListPageProps) {
  return <ContainerWithNav>
    <h1>{title}</h1>
    <Link href={formUrl}>{newRegisterLabel}</Link>
    <Suspense fallback={<p>Carregando...</p>}>
      <ListComponent {...props} formUrl={formUrl}/>
    </Suspense>
  </ContainerWithNav>
}

