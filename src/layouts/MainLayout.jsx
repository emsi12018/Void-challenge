import { cn } from '@/utils/cn'

function MainLayout({ children, className }) {
  return (
    <div
      className={cn(
        'min-h-screen w-full overflow-x-hidden bg-[#f7f6f2] text-slate-900',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default MainLayout
