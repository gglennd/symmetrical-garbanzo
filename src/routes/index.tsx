import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

import db from '@/lib/db'
import { message } from '@/lib/db/schema'

export const postMessage = createServerFn().handler(async () => {
  const msg = await db.select().from(message)
  return msg
})

export const getMessage = createServerFn().handler(async () => {
  const msg = await db.select().from(message)
  return msg
})

export const Route = createFileRoute('/')({
  component: RouteComponent,
  loader: () => getMessage()
})

function RouteComponent() {
  const messages = Route.useLoaderData()

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-4xl font-bold">Hello "/"!</h1>

      <form onSubmit={() => postMessage()}>
        <label htmlFor="message_string">Insert message</label>
        <input id='message_string' type="text" placeholder='hello' />
        <button type='submit'>submit</button>
      </form>

      {messages.length > 0 ? (
        <ul className="space-y-2">
          {messages.map((msg) => (
            <li key={msg.id} className="text-lg">
              {msg.messge}
            </li>
          ))}
        </ul>
      ) : (<p>none</p>)
      }

      <Button>Click me</Button>
    </div>
  )
}
