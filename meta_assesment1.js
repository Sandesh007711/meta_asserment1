/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTT = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, age, gender, add ) {
    const NFT = {
        "Name" :name,
        "Age" :age,
        "Sex": gender,
        "Address": add        
    }
    NFTT.push(NFT);
    console.log("Minted Sucessfully " +name);   

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    var i;
    for(i=0;i< NFTT.length;i++){
        console.log("\n");
      
        console.log("ID " + (i+1));
       console.log("Name \t : " + NFTT[i].Name);
       console.log( "Age \t : " + NFTT[i].Age);
       console.log( "Sex \t : " + NFTT[i].Sex);
       console.log( "Address\t : " + NFTT[i].Address);
    }
    console.log("\n");

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total Supply "+ NFTT.length);

}

// call your functions below this line
mintNFT("Sandesh","20","Male","India");
mintNFT("Jhon","21","Male","Pakisthan");
mintNFT("Smith","30","Male","Austria");
mintNFT("Riya","22","Female","Nepal");
listNFTs();
getTotalSupply();
