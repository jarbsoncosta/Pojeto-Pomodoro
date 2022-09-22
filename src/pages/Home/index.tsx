import { Play } from 'phosphor-react'
import {
  HomeContainer,
  FormContainer,
  CountdownContainer,
  Separator,
  StartCountdownButton,
  TaskMinutesInput,
  MinutesAmountInput,
} from './styles'
export function Home() {
  return (
    <HomeContainer>
      <div className="header">
        <form action="">
          <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskMinutesInput
              list="task-suggestions"
              type="text"
              id="task"
              placeholder="Dê um nome para o seu projeto"
            />

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput
              type="number"
              id="minutesAmount"
              placeholder="00"
              step={5}
              min={5}
              max={60}
            />
            <datalist id="task-suggestions">
              <option value="Projeto1" />
              <option value="Projeto2" />
              <option value="Projeto3" />
            </datalist>
            <span>minutos</span>
          </FormContainer>

          <CountdownContainer>
            <span>0</span>
            <span>0</span>
            <Separator>:</Separator>
            <span>0</span>
            <span>0</span>
          </CountdownContainer>
          <StartCountdownButton disabled type="submit">
            <Play size={24} /> Começar
          </StartCountdownButton>
        </form>
      </div>
    </HomeContainer>
  )
}
