import { Container } from "../../components/Container";
import { CountDown } from "../../components/Countdown";
import { MainForm } from "../../components/MainForm";
import { MainTemplate } from "../../components/Template/MainTemplate";

export function Home() {
  return (
    <MainTemplate>
            <Container>
              <CountDown />
            </Container>
      
            <Container>
              <MainForm />
            </Container>
      
    </MainTemplate>
  )
}