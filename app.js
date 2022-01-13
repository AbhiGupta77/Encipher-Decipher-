var message=document.getElementById('message');
var btn_encrypt=document.getElementById('btn_encrypt');
var btn_decrypt=document.getElementById('btn_decrypt');
var encrypted_message=document.getElementById('encrypted_message');
var array=new Array(26);
for (var i = 65; i <= 90; i++) {
    array[i-65] = String.fromCharCode(90-(i-65));// Hashing the characters  like array[0]='Z' ,array[1]='Y' ........array[25]='A'


}


const Encryption=()=>{

    var original_message=message.value;//message that user type 
    var final_message="";//store the encrypted message
    // console.log(original_message);

    for(var i=0;i<original_message.length;i++)
    {
        if((original_message[i]>='A' && original_message[i]<='Z') || (original_message[i]>='a' && original_message[i]<='z'))
        {
            var num=original_message[i].toUpperCase();//converting the character to upper case
            var j=num.charCodeAt(0)-65;//finding the value of current character in the range of [0,25];
            if(original_message[i]>='a' && original_message[i]<='z')
            {
                final_message+=array[j].toLowerCase();//adding the character using hashing (for example if j=0 then array[0]='Z' will store in final_messsage)
            }
            else
            {
                final_message+=array[j].toUpperCase();//adding the character using hashing (for example if j=25 then array[25]='A' will store in final_messsage)

            }
        }
        else
        {
            final_message+=" ";
        }
       
    }
    // console.log(final_message);
    encrypted_message.value=final_message;//showing it on web application

}
const Decryption =()=>{
    var original_message=encrypted_message.value;//encrypted  message
    var final_message="";//store the actual message
    

    for(var i=0;i<original_message.length;i++)
    {
        if((original_message[i]>='A' && original_message[i]<='Z') || (original_message[i]>='a' && original_message[i]<='z'))
        {
            var num=original_message[i].toUpperCase();//converting the character to upper case
            var j=num.charCodeAt(0)-65;//finding the value of current character in the range of [0,25];
           
            if(original_message[i]>='a' && original_message[i]<='z')
            {
                final_message+=array[j].toLowerCase();//adding the character using hashing (for example if j=0 then array[0]='Z' will store in final_messsage)
            }
            else
            {
                final_message+=array[j].toUpperCase();//adding the character using hashing (for example if j=25 then array[25]='A' will store in final_messsage)

            }
   
        }
        else
        {
            final_message+=" ";
        }
       
    }

    // console.log(final_message);
    message.value=final_message;//showing it on web application
    

}

message.addEventListener('input',Encryption);//when user write something it will encrypt his message and show on the otherside
encrypted_message.addEventListener('input',Decryption );//when user write something it will decrypt his message and show on the otherside the original message


//for button to see  it is actuallay working we need to comment out the above two eventlistener other wise we will not able to see the changes
btn_encrypt.addEventListener('click',Encryption);//by clicking the button we can get the same result as we are getting above (encrptying a message) 
btn_decrypt.addEventListener('click',Decryption );//by clicking the button we can get the same result as we are getting above (decrptying a message)