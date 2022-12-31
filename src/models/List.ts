
// The interfere manege the types in the array object 
interface Members{
    Position: number
    BillionaireName: string
    NetWorth: number
    Company: string
    Country:string
    

}

const ListMembers: Members[] = [
    {
        Position: 0,
        BillionaireName:'Jeff Bezos',
        NetWorth: 140,
        Company: 'Amazon',
        Country: 'USA'
    }, {
        Position: 1,
        BillionaireName: 'Bernard Arnault',
        NetWorth: 107,
        Company: 'LVMH',
        Country: 'France'
    },
    {
        Position: 2,
        BillionaireName: 'Bill Gates',
        NetWorth: 106,
        Company: 'Microsoft',
        Country: 'USA'
    }, {
        Position: 3,
        BillionaireName: 'Warren Buffett',
        NetWorth: 102,
        Company: 'Berkshire Hathaway',
        Country: 'USA'
    },
    {
        Position: 4,
        BillionaireName: 'Mark Zuckerberg',
        NetWorth: 84,
        Company: 'Facebook',
        Country: 'USA'
    },
]



export default ListMembers;
