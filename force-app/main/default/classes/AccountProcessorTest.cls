@IsTest
public with sharing class AccountProcessorTest {
    @IsTest
    public static void AccountProcessorTest() {
        List<Id> Ids = new List<Id>();
        Account a = new Account();
        a.Name = 'Test';
        
        Insert a;

        Contact c = new Contact();
        c.LastName = 'asd';
        
        c.AccountId = a.Id;
        Insert c;



        Contact c1 = new Contact();
        c1.LastName = 'asd';
        c1.AccountId = a.Id;
        Insert c1;

        Test.startTest();
       
        Ids.add(a.Id);
        try{
            AccountProcessor.countContacts(Ids);
        }catch(Exception e){

        }
        
        Test.stopTest();

    }
}