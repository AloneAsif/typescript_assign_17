// Question no # 18     Seeing the World

let my_Fav_Location: string[] = ['Kalash Valley', 'Naran', 'Kaghan', 'Balochistan', 'Turkey'];

for (let location of my_Fav_Location){
    
    console.log(`my favourite location is ${location}`)
}

let sorted_list: string[] = my_Fav_Location.sort()

console.log(sorted_list)

let rev_sorted_list: string[] = my_Fav_Location.sort().reverse()

console.log(`reverse sorted list is: ${rev_sorted_list}`)

my_Fav_Location.reverse()

console.log(my_Fav_Location)
