public class CreateAccountsBatch implements Database.Batchable<Account> {

    private List<Account> accounts;

    public CreateAccountsBatch(List<Account> accounts) {
        this.accounts = accounts;
    }

    public Iterable<Account> start(Database.BatchableContext bc) {
        return accounts;
    }

    public void execute(Database.BatchableContext bc, List<Account> scope) {
        insert scope;
    }

    public void finish(Database.BatchableContext bc) {
    }
}