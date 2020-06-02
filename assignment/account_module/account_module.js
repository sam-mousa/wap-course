/**
    I added some EXTRA function on requested Homework
    I made check and Alerts for Empty or not a number of inputs
    I made balance you can add deposit for it if the account name is already existing.
**/

const AccountModule = (function() {
    let accounts = [];

    let account = function(nameValue, depositValue) {
        let name = nameValue;
        let balance = depositValue;

        function deposit(amount){
            balance += amount;
        }
        
        function getName(){
            return name;
        }

        return {
            deposit,
            getName,
            accountDetails : function() {
            return name + " " + balance;
            }
        }
    };
    

    function addAccount(){
        
        let nameValue = document.getElementById("name").value;
        let depositValue =parseFloat(document.getElementById("deposit").value);

        if (!nameValue & !depositValue ){
            document.getElementById("text").classList.add('element_visable');
            document.getElementById("text").classList.remove('element_invisable');
            document.getElementById("addText").innerHTML = " Name and Deposit";
        }else if ( nameValue == null || nameValue.trim() === '' ){
            document.getElementById("text").classList.add('element_visable');
            document.getElementById("text").classList.remove('element_invisable');
            document.getElementById("addText").innerHTML = " Name";
        }else if (!depositValue ){
            document.getElementById("text").classList.add('element_visable');
            document.getElementById("text").classList.remove('element_invisable');
            document.getElementById("addText").innerHTML = " Deposit";
        } else{
            document.getElementById("text").classList.remove('element_visable');
            document.getElementById("text").classList.add('element_invisable');

            if(Number.isNaN(depositValue)){
                depositValue = 0;
            }
    
            let oldAccount = accounts.find(acc=>acc.getName()==nameValue);
            
            if(oldAccount){
                oldAccount.deposit(depositValue);
            }else{
                let newAccount = account(nameValue, depositValue);
            accounts.push(newAccount);
            }
        }
        document.getElementById("textarea").innerHTML =accounts.map( a => a.accountDetails()).join("\n");
       
    }
    return {
        addAccount
    };
})();





