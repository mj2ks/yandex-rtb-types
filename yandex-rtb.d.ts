/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export namespace yandex {
	interface yaContextCb {
		push: (cb: CallableFunction) => void
	}
	namespace Ya {
		namespace Context {
			interface RenderData {
				product: ['direct', 'rtb']
			}
			interface ErrorData {
				code: number
				text: string
				type: ['error', 'warning']
			}
			interface RenderOptions {
				async?: boolean // ??
				statId?: number
				blockId: string
				renderTo: string
				onRender?: (data: RenderData) => void
				onError?: (data: ErrorData) => void
				onClose?: () => void
				videoCallbacks?: {}
			}
			class AdvManager {
				static render: (options: RenderOptions, callback?: CallableFunction) => void
				static destroy: () => void
			}
		}
		
	}
	
}
export interface YaWindow {
  yaContextCb: yandex.yaContextCb
  Ya: typeof yandex.Ya
}

