import { IEvents, EventEmitter } from '../components/base/events';
import { Api } from '../components/base/api';

interface IProduct {
	id: string;
	name: string;
	price: number;
	image: string;
	description?: string;
};

interface IOrder {
	email: string;
	phone: string;
	address: string;
	items: string[];
	total: number;
	add(id: string): void;
	remove(id: string): void;
};

interface IBasket {
	items: IProduct[];
	total: number;
};

interface IFormState {
	valid: boolean;
	errors: Record<string, HTMLElement>[];
};

interface ISuccess {
	content: HTMLElement;
}

type PaymentType = 'online' | 'delivery';

type EventName = string | RegExp;
type Subscriber = Function;
type EmitterEvent = {
	eventName: string;
	data: unknown;
};
