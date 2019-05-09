
export class OneToOneMessagingModel {
    public participants ?: string[];
    public messages     ?: {
                            sender  ?: string;
                            message ?: string;
                            time    ?: number;
                            dispName?: string;
                            }[];
    public otherUser    ?: string;
    public title        ?: string;
    
}

