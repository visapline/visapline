import { PageContainer} from "./Dashboard.styled.ts"

export function Dashboard() {
  return (
    <PageContainer>
        <h1>Dashboard</h1>
        <p>Welcome to the Dashboard!</p>
        <p>This is a protected route.</p>
    </PageContainer>
  )
}