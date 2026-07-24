perfect. 

please check these functions:

1 this should remove the item form the array. Only used for string array
const handleRemoveItemFromArray = (item:string, key:string) => {
    setHero(prev => ({
      ...prev,
      [key]: (prev[key as keyof Hero] as string[]).filter(i => i !== item)
    }))
  }


2 these functions should add and remove from the bonus array:
 bonus: {
    name: string;
    value: number;
  }[]

  const handleAddItemToBonusArray = (key:string, value:number) => {
    setHero(prev => ({
      ...prev,
      bonus: [...prev, {[key]: value}]
    }))
  }
  error: Type 'Hero' must have a '[Symbol.iterator]()' method that returns an iterator.ts(2488)

  const handleRemoveItemFromBonusArray = (name:string) => {
      setHero(prev => ({
        ...prev,
        bonus: (prev[bonus as keyof hero] as {name: string; value: number;}[]).filter(i => i.name !== name)
      }))
  }
  error: 



  3 i have this prop also :
  zaino: {
    oggetti: string[];
    pasti: number;
  };

  can i use the functions i have laredy created to add/remove from a string array and  
  and the one for simple number value or it is worth creating a function for this ?
  please note there are many istances where i only have to update one of the two fields


