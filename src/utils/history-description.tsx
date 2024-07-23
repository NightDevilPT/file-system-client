// historyDescription.ts

import { History, SharedEvents } from "@/types/history";
import React from "react";

export function generateDescription(event: History): JSX.Element {
	const { eventName, from, to } = event;
	const style = "w-full h-auto text-sm";
	const highlightedStyle = "text-primary-500";

	switch (eventName) {
		case SharedEvents.UserCreatedEvent:
			return <span className={style}>You have created your new account.</span>;

		case SharedEvents.UserVerifyEvent:
			return (
				<span className={style}>You have verified your account.</span>
			);

		case SharedEvents.UserForgetPasswordRequestEvent:
			return (
				<span className={style}>
					You have requested a password reset.
				</span>
			);

		case SharedEvents.UserPasswordUpdatedEvent:
			return (
				<span className={style}>You have updated your password.</span>
			);

		case SharedEvents.UserLoginEvent:
			return <span className={style}>You have logged in.</span>;

		case SharedEvents.ProfileCreatedEvent:
			return (
				<span className={style}>You have created your profile.</span>
			);

		case SharedEvents.ProfileUpdatedEvent:
			if (from && to) {
				const updatedFields: JSX.Element[] = Object.keys(from).map(
					(key, index, array) => (
						<React.Fragment key={key}>
							<span className={highlightedStyle}>{key}</span> from{" "}
							<span className={highlightedStyle}>
								{from[key]}
							</span>{" "}
							to{" "}
							<span className={highlightedStyle}>{to[key]}</span>
							{index < array.length - 1 && ", "}
						</React.Fragment>
					)
				);
				return (
					<span className={style}>
						You have updated your profile: {updatedFields}.
					</span>
				);
			}
			return (
				<span className={style}>You have updated your profile.</span>
			);

		case SharedEvents.FolderCreatedEvent:
			return (
				<span className={style}>
					You have created a new folder{" "}
					<span className={highlightedStyle}>{to?.name}</span>.
				</span>
			);

		case SharedEvents.FolderNameChangedEvent:
			return (
				<span className={style}>
					You have changed the folder name from{" "}
					<span className={highlightedStyle}>{from?.name}</span>. to
					<span className={highlightedStyle}>{to?.name}</span>.
				</span>
			);

		case SharedEvents.FolderMovedEvent:
			return (
				<span className={style}>
					You have moved a folder from{" "}
					<span className={highlightedStyle}>{from?.parent}</span> to{" "}
					<span className={highlightedStyle}>{to?.parent}</span>..
				</span>
			);

		case SharedEvents.FolderPermissionChangedEvent:
			return (
				<span className={style}>
					You have changed folder permissions from{" "}
					<span className={highlightedStyle}>{from?.permission}</span>
					. to{" "}
					<span className={highlightedStyle}>{to?.permission}</span>..
				</span>
			);

		case SharedEvents.FileCreatedEvent:
			return (
				<span className={style}>
					You have added a new file{" "}
					<span className={highlightedStyle}>{to?.name}</span>.
				</span>
			);

		case SharedEvents.FileNameChangedEvent:
			return (
				<span className={style}>
					You have changed the file name from{" "}
					<span className={highlightedStyle}>{from?.name}</span> to '
					<span className={highlightedStyle}>{to?.name}</span>.
				</span>
			);

		case SharedEvents.FileMovedEvent:
			return (
				<span className={style}>
					You have moved a file from{" "}
					<span className={highlightedStyle}>{from?.folder}</span> to{" "}
					<span className={highlightedStyle}>{to?.folder}</span>.
				</span>
			);

		case SharedEvents.FilePermissionChangedEvent:
			return (
				<span className={style}>
					You have changed file permissions from{" "}
					<span className={highlightedStyle}>{from?.permission}</span>
					. to{" "}
					<span className={highlightedStyle}>{to?.permission}</span>.
				</span>
			);

		default:
			return <span className={style}>An unknown event occurred.</span>;
	}
}
