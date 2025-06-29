import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='text-4xl'>Hello "/"!
    <Button>Click me</Button>
    </div>
  )
}
