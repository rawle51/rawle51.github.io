enum ButtonType {
  button = 'button',
  link = 'link',
}

interface ButtonProps {
  type: ButtonType;
}

export const Button = ({ type }: ButtonProps) => {
  return (
    <span>Button</span>
  )
}