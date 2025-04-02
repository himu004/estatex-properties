import { NAVBAR_HEIGHT } from '@/lib/constants'

const Layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        <main className={`h-full flex w-full flex-col pt-[${NAVBAR_HEIGHT}]px`}> 
           {children}
        </main>
    </div>
  )
}

export default Layout