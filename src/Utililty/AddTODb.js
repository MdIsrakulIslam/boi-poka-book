import { toast } from "react-toastify";

const getStoredReadList =() =>{
    // read-list    it is a local storage
    const storedListStr = localStorage.getItem('read-list')
    if (storedListStr)
    {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else
    {
        return []
    }
}
const addToStoreReadList =(id) =>{
    const storedList = getStoredReadList();
    if (storedList.includes(id)){
        //already exists. do not add it
        console.log(id,'already exists in the read list')
    }
    else 
    {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('read-list',storedListStr)
        toast('This book is added to the cart option')
    }
} 

const getStoredWistList =() =>{
    const storedListStr = localStorage.getItem('add-list')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
          return storedList;  
        
    }
    else
    {
           return []
    }
}
const addToStoreWistList =(id) =>{
    const storedList =getStoredWistList()
    if(storedList.includes(id)){
        console.log(id, 'already exists in the list')
    }
    else
    {
        storedList.push(id)
        const storedListStr =JSON.stringify(storedList)
        localStorage.setItem('add-list',storedListStr)
        toast('This book is added to you wistlist')
    }
}







export {addToStoreReadList ,addToStoreWistList, getStoredReadList,getStoredWistList}