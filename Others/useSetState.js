/**
 * 
 * 实现一个custom hooks
 * 
 * 完成一下效果(其实就是局部更新state， 功能类似于setState)
 * 
 * const [state, setState] = useState({ name: 'tom', age: 18 })
 * 
 * setState({ name: 'han' }) // state: { name: 'han', age: 18 }
 * 
 * setState((preState) => { name: 'han' })
 */

 function useSetState(state) {
   const [val, setVal] = useState(state)

   function setValue(newState) {
     if (typeof newState === 'function') {
        const temp = newState(state)
        return setVal({ ...state, ...temp })
     }
     return setVal({ ...state, ...newState })
   }

   return [val, setVal]
 }

