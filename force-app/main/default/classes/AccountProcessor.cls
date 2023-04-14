public with sharing class AccountProcessor {

    @future(callout=true)
    public static void countContacts(List<Id> Ids) {

        List<Contact> contacts = new List<Contact>();
        List<Account> accounts = new List<Account>();
        contacts = [SELECT ID,AccountId  FROM Contact   WHERE  AccountId =:Ids];

        accounts = [SELECT ID,Number_Of_Contacts__c  FROM Account   WHERE  ID =:Ids];
        
        for(Account Acc: accounts){
            for(Contact con : contacts){
                If(con.AccountId != null){
                    if(Acc.Id == con.AccountId ){
                        if(Acc.Number_Of_Contacts__c  == null ){
                            Acc.Number_Of_Contacts__c = 1;
                        }else{
                            Acc.Number_Of_Contacts__c++;
                        }
                        
                                     
                    }
                }
                
            }
        }
        update accounts;


    }
}