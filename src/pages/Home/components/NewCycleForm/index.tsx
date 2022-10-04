import { FormContainer, MinutesAmountInput, TaskMinutesInput } from './styles'
import { useContext } from 'react'

import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CycleContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskMinutesInput
        disabled={!!activeCycle}
        list="task-suggestions"
        type="text"
        id="task"
        placeholder="Dê um nome para o seu projeto"
        {...register('task')}
      />

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        disabled={!!activeCycle}
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', {
          valueAsNumber: true,
        })}
      />
      <datalist id="task-suggestions">
        <option value="Projeto1" />
        <option value="Projeto2" />
        <option value="Projeto3" />
      </datalist>
      <span>minutos</span>
    </FormContainer>
  )
}
