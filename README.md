What Did I Learn?

1. Props and states, passing on props and states to child components in react
2. handleGeneral = (e) => {
   this.setState({
   [e.target.name]: e.target.value,
   });
   };
   Created single function to handle the multiple inputs in a component.
3. Adjusted functions and state to allow multiple education/experience.

What did I struggle with?

1. I've used react before but it's been a while so took time to learn everything again.
2. Too much recycling even using react. Probably ways I could have shortened code or placed functions in their respective components. Shoved too many things into APP file.

---

HOOKS UPDATE

Branch with same implementation with hooks.
Only useState used here, no useEffect is used and no lifecycle methods were used.
App is no longer using class method but is instead using functional component method.
No components needed changing, only App.js.
