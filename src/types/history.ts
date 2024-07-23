export interface History {
	id: string;
	userId: string;
	resourceId: string;
	eventName: string;
	from: Record<string, any> | null;
	to: Record<string, any> | null;
	createdAt: string;
	updatedAt: string;
}

// sharedEvents.ts

export enum SharedEvents {
	UserCreatedEvent = 'UserCreatedEvent',
	UserVerifyEvent = 'UserVerifyEvent',
	UserForgetPasswordRequestEvent = 'UserForgetPasswordRequestEvent',
	UserPasswordUpdatedEvent = 'UserPasswordUpdatedEvent',
	UserLoginEvent = 'UserLoginEvent',
	
	ProfileCreatedEvent = 'ProfileCreatedEvent',
	ProfileUpdatedEvent = 'ProfileUpdatedEvent',
	
	FolderCreatedEvent = "FolderCreatedEvent",
	FolderNameChangedEvent = "FolderNameChangedEvent",
	FolderMovedEvent = "FolderMovedEvent",
	FolderPermissionChangedEvent = "FolderPermissionChangedEvent",
	
	FileCreatedEvent = "FileCreatedEvent",
	FileNameChangedEvent = "FileNameChangedEvent",
	FileMovedEvent = "FileMovedEvent",
	FilePermissionChangedEvent = "FilePermissionChangedEvent"
  }
  