function List(){

    const fruits=["Apple", "Orange","Banana","Grapes","Pineapple"]

fruits.sort();  //sort to alphebitical order

//taking each element 1 by 1, n displying as a list
const listItems=fruits.map( fruit => <li>{fruit}</li>);

    //return(<ol>{listItems}</ol>)



    //part 2  use callories
    const foods=[
        {id:1, name:"Rice", calories:60},
        {id:2,name:"Noodles",calories:20},
        {id:3,name:"Eggs",calories:55},
        {id:4,name:"Hoppers",calories:89}
    ]

        foods.sort((a,b)=>a.name.localeCompare(b.name));  //albhabetical
        //foods.sort((a,b)=>b.name.localeCompare(a.name)); //reverse albhabitical

        //foods.sort((a,b)=> a.calories-b.calories);   //sortong in numaric [minus one]

        const lowCalfruits=foods.filter(food=>food.calories>20);//less than 20

        const list3=lowCalfruits.map( lowCalfruit => <li key={lowCalfruit.id}>
            {lowCalfruit.name} :&nbsp;
             {lowCalfruit.calories}</li>);


    const list2=foods.map( food => <li key={food.id}>
                                   {food.name} :&nbsp;
                                    {food.calories}</li>);

         return (<ol>{listItems}<b> {list2}</b> {list3}</ol> ) 
         
                                   
    

}
export default List