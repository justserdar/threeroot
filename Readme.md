# Nuxt Layer with Socket.IO to compliment the Three.js and GSAP layer.

This Nuxt 3 layer sets up the Nitro Server together with Socket.io on port 9000 and additionally includes the `nuxt-auth-utils` module.

-[x] Socket.IO Server and Client import
-[x] Default Namespace
-[x] Default nuxt-auth-utils
-[] Turso DB / MongoDB integration
-[] Drizzle / Mongoose ORM


You can connect to the Socket server on port 9000 outside of this layer in other layers via:
```html
<script setup lang="ts">
import {
  ref,
  nextTick,
  onMounted,
  onBeforeMount,
  onUnmounted,
} from 'vue'
import { /* io, */ Manager } from 'socket.io-client'

const socketUrl = new URL('ws:localhost:9000/')
const manager = new Manager(socketUrl)
const socket = manager.socket('/')

const user = ref()

onBeforeMount(() => {
  socket.on('connect', () => {
    console.log('Connected to server with ID' + socket.id)
    if (!user) setUserData(data)
  })
})

onMounted(async () => {
  // Do whatever ...
  socket.emit('setName', 'Erik')
})

onUnmounted(() => {
  socket.disconnect()
})
</script>
```

## Setup
Make sure to install the dependencies:
```bash
npm install --save @justserdar/threebranch
```
Then add the dependency to their `extends` in `nuxt.config`:
```ts
defineNuxtConfig({
  extends: '@justserdar/threebranch'
})
```
You can also download the repo and add it to a `layers` folder.
Then configure your `package.json` and to point to the local layer where you can extend the code. 
```ts
defineNuxtConfig({
    // Highly recommended to use a monorepo codebase structure in VSCODE when using layers and monorepo packages.
  extends: '../../layers/@justserdar/threebranch'
})
```
## Development Server
Start the development server on http://localhost:3000
```bash
pnpm dev
```
## Production
Build the application for production:
```bash
pnpm build
```