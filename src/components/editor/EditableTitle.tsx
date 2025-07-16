import { Input } from '@components/ui/Input'
import { Title } from '@components/ui/Title'
import { useInputToggler } from '@hooks/useInputToggler'

/**
 * Renders an editable title component.
 * This component allows users to edit the title of a note.
 */
export const EditableTitle = () => {
  const { 
    isEditing, 
    title, 
    inputRef, 
    handleInput, 
    handleBlurOrSubmit, 
    handleTrigger, 
    activateEditing 
  } = useInputToggler({ initialTitle: "Meeting Notes: Q4 Planning" })

  return (
    <div className="w-full flex items-center gap-3">
      {isEditing ? (
        <Input
          ref={inputRef}
          value={title}
          onChange={handleInput}
          onBlur={handleBlurOrSubmit}
          onKeyDown={handleTrigger}
          className="flex-1/2"
          variant="transparent"
        />
      ) : (
        <Title 
          size="2xl" 
          onClick={activateEditing}
          className="transition-colors hover:cursor-pointer p-1 border-2 border-transparent rounded-lg hover:border-primary"
        >
          {title}
        </Title>
      )}
    </div>
  )
}