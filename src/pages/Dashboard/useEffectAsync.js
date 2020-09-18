import { useEffect } from 'react';

export default function useEffectAsync(effect, dependencies){
   useEffect(()=> {
     effect()
   }, dependencies)
}