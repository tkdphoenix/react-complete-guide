export default function Tabs({ children, buttons, ButtonsContainer = 'menu'}) {
  // could also pass in ButtonsContainer as buttonsContainer, to represent custom component,
  // then users of Tabs can just pass the component name in; strings for default values
  // like 'div', 'ul', or 'span', or Section if it is an imported custom component. Then
  // line 6 is needed
  // const ButtonsContainer = buttonsContainer
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  )
}