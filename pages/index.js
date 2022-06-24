import MainLayout from "../components/MainLayout"
import About from "../components/About"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <MainLayout hasHeader={false} hasFooter={false}>
      <Hero />
      <About />
    </MainLayout>
  )
}
