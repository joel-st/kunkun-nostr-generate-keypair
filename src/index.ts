import { clipboard, expose, HeadlessCommand, toast } from "@kksh/api/headless"
import { generateSecretKey } from 'nostr-tools/pure'
import { nsecEncode } from 'nostr-tools/nip19'

class GenerateNsec extends HeadlessCommand {
	async load() {
		const nsec = nsecEncode(generateSecretKey())
		return clipboard
			.writeText(nsec)
			.then(() => {
				toast.success(`Copied to clipboard: ${nsec}`)
			})
			.catch((err) => {
				toast.error(`Failed to generate Nsec: ${err}`)
			})
	}
}

expose(new GenerateNsec())
