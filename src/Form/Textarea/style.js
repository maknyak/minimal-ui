export const textarea = `
  background-color: #fff;
  border-radius: .25rem;
  border: 1px solid transparent;
  border-color: #dee2e6;
  box-shadow: 0 3px 2px rgba(233,236,239,.05);
  color: #8898aa;
  display: block;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  min-height: calc(1.5em + 1.25rem + 2px);
  line-height: 1.5;
  padding: .625rem .75rem;
  width: 100%;
  transition: all .15s cubic-bezier(.68,-.55,.265,1.55);
  -webkit-transition: all .15s cubic-bezier(.68,-.55,.265,1.55);

  &:focus {
    background-color: #fff;
    border-color: #5e72e4;
    color: #8898aa;
    outline: 0;
    box-shadow: 0 3px 9px rgba(50,50,9,0), 3px 4px 8px rgba(94,114,228,.1);
  }

  &:disabled,
  &.disabled {
    background-color: #f7fafe;
    border-color: #f7fafe;
    box-shadow: none;
  }
`;
