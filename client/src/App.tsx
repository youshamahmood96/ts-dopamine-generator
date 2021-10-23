import RoutesHandler from "./Routing/RoutesHandler";

import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient: QueryClient = new QueryClient()
function App() {    
  return (
  <QueryClientProvider client={queryClient}>
    <RoutesHandler />
  </QueryClientProvider>
  )
}

export default App;
