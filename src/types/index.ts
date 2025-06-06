import { IEvents, EventEmitter } from '../components/base/events';
import { Api } from '../components/base/api';

interface IProduct {
	id: string;
	name: string;
	price: number;
	image: string;
	description?: string;
}

interface IOrder {
	email: string;
	phone: string;
	address: string;
	items: string[];
	total: number;
	add(id: string): void;
	remove(id: string): void;
}

interface ICatalogItems<T> {
	items: T[];
	getProductById(id: string): IProduct | undefined;
	addProduct(product: IProduct): void;
	removeProduct(id: string): void;
}

// class Product implements IProduct {
// 	protected _id: string;
// 	protected _name: string;
// 	protected _price: number;
// 	protected _image: string;
// 	protected _description?: string;
// 	constructor(
// 		public id: string,
// 		public name: string,
// 		public price: number,
// 		public image: string,
// 		public description?: string
// 	) {}
// }

abstract class Component<T> {
	protected container: HTMLElement;
	protected events: IEvents;
	// constructor(
	// 	container: HTMLElement,
	// 	selector: string | null,
	// 	events: IEvents
	// ) {}
	// render(data?: Partial<T>): HTMLElement | void {}
	// setData(data: Partial<T>): void {}
	// removeComponent(): void {}
}

// class CatalogItems implements ICatalogItems<IProduct> {
// 	protected _items: IProduct[];
// 	constructor(items: IProduct[] = []) {}
// 	getProductById(id: string): IProduct | null {
// 		return null;
// 	}
// 	removeProduct(id: string): void {}
// 	addProduct(product: IProduct): void {}
// 	set items(items: IProduct[]) {
// 		this._items = items;
// 	}
// 	get items(): IProduct[] {
// 		return this._items;
// 	}
// }

// class Order implements IOrder {
// 	protected email: string;
// 	protected phone: string;
// 	protected address: string;
// 	protected items: string[];
// 	protected total: number;
	// constructor(email: string, phone: string, address: string, items: []) {}
	// add(id: string): void {};
	// remove(id: string): void {};
	// set email(email: string) {
	// 	this._email = email;
	// }
	// set address(address: string) {
	// 	this._address = address;
	// }
	// set total(total: number) {
	// 	this._total = total;
	// }
	// get total(): number {
	// 	return this._total;
	// }
	// get items(): string[] {
	// 	return this._items;
	// }
	// set items(value: string[]) {}
	// set phone(phone: string) {
	// 	this._phone = phone;
	// }
// }

interface IModalData {
	content: HTMLElement;
	closeButton: HTMLButtonElement;
	open(): void;
	close(): void;
}

interface IBasket {
	orderItems: IProduct[];
	total: number;
}

interface IModalWithFormData {
	content: HTMLElement;
	closeButton: HTMLButtonElement;
	form: HTMLFormElement;
	errors: string[];
	open(): void;
	close(): void;
	checkValidation(): boolean;
	setError(message: string): void;
	clearErrors(): void;
}

abstract class Modal<T> extends Component<T> {
	protected _container: HTMLElement;
	protected _events: EventEmitter;
	protected _closeButton: HTMLButtonElement;
	protected _content: HTMLElement;
	// constructor(container: HTMLElement, selector: string, events: IEvents) {
	// 	super(container, selector, events);
	// }
	// render(data: Partial<T>): HTMLElement | null {
	// 	return null;
	// }
	// open(): void {}
	// close(): void {}
	// setData(data: Partial<T>): void {}
}

abstract class ModalWithForm<T> extends Component<T> {
	protected _container: HTMLElement;
	protected _events: EventEmitter;
	protected _errors: string[];
	// constructor(container: HTMLElement, selector: string, events: IEvents) {
	// 	super(container, selector, events);
	// }
	// render(data: Partial<T>): HTMLElement | null {
	// 	return null;
	// }
	// open(): void {}
	// close(): void {}
	// setData(data: Partial<T>): void {}
	// checkValidation(): boolean {
	// 	return true;
	// }
	// setError(message: string): void {}
	// onInput(): void {}
	// clearErrors(): void {}
}

class HomePage extends Component<ICatalogItems<IProduct>> {
	protected _container: HTMLElement;
	protected _catalog: ICatalogItems<IProduct>;
	protected _basket: HTMLButtonElement;
	protected _events: EventEmitter;
	// constructor(container: HTMLElement, events: EventEmitter) {
	// 	super(container, null, events);
	// }
	// render(data: Partial<ICatalogItems<IProduct>>): HTMLElement | null {
	// 	return null;
	// }
	// setData(data: Partial<ICatalogItems<IProduct>>): void {}
}

class BasketView extends Modal<IBasket> {
	protected _container: HTMLElement;
	protected _list: HTMLElement;
	protected _total: number;
	protected closeButton: HTMLButtonElement;
	protected orderButton: HTMLButtonElement;
	protected _events: EventEmitter;
	// constructor(container: HTMLElement, selector: string, events: EventEmitter) {
	// 	super(container, selector, events);
	// }
	// onAdd(item: IProduct): void {}
	// onRemove(item: string): void {}
	// render(data: Partial<IBasket>): HTMLElement | null {
	// 	return null;
	// }
	// onSubmit(list: string[]): void {}
	// set total(total: number) {
	// 	this._total = total;
	// }
	// get total(): number {
	// 	return this._total;
	// }
}

type PaymentType = 'online' | 'delivery';

class OrderView<IOrder> extends ModalWithForm<IOrder> {
	protected _container: HTMLElement;
	protected _form: HTMLFormElement;
	protected _submitButton: HTMLButtonElement;
	protected _nextButton: HTMLButtonElement;
	protected _payment: PaymentType;
	protected _address: string;
	protected _errors: string[];
	protected _events: EventEmitter;
	// constructor(container: HTMLElement, selector: string, events: IEvents) {
	// 	super(container, selector, events);
	// }
	// render(data: Partial<IOrder>): HTMLElement | null {
	// 	return null;
	// }
	// setData(data: Partial<IOrder>): void {}
	// onSubmit(order: Partial<IOrder>): void {}
	// set payment(value: PaymentType) {
	// 	this._payment = value;
	// }
	// set address(value: string) {
	// 	this._address = value;
	// }
}

class ContactsView extends ModalWithForm<IOrder> {
	protected _container: HTMLElement;
	protected _form: HTMLFormElement;
	protected _phone: string;
	protected _email: string;
	protected _submitButton: HTMLButtonElement;
	protected _createOrderButton: HTMLButtonElement;
	protected _errors: string[];
	protected _events: EventEmitter;
	// constructor(container: HTMLElement, selector: string, events: IEvents) {
	// 	super(container, selector, events);
	// }
	// render(data: Partial<IOrder>): HTMLElement | null {
	// 	return null;
	// }
	// setData(data: Partial<IOrder>): void {}
	// onSubmit(order: Partial<IOrder>): void {}
	// set email(value: string) {
	// 	this._email = value;
	// }
	// set phone(value: string) {
	// 	this._phone = value;
	// }
}

class ProductView extends Component<IProduct> {
	protected _container: HTMLElement;
	protected _events: EventEmitter;
	protected _addButton?: HTMLButtonElement;
	protected _deleteButton?: HTMLButtonElement;
	protected _closeButton?: HTMLButtonElement;
	// constructor(container: HTMLElement, selector: string, events: IEvents) {
	// 	super(container, selector, events);
	// }
	// render(data: Partial<IProduct>) {}
	// setData(data: Partial<IProduct>) {}
	// onAdd(): void {}
	// onDelete(): void {}
	// removeCard(): void {}
}

class SuccessView extends Modal<IModalData> {
	closeButton: HTMLButtonElement;
}

class ProductApi extends Api {
	constructor(baseUrl: string) {
		super(baseUrl);
	}

	//getProduct(path: string): Promise<IProduct> {};

	//getCatalogItems(path: string): Promise<IProduct[]> {};

	// createOrder(order: IOrder): boolean {
	// 	return true;
	// }
}

type EventName = string | RegExp;
type Subscriber = Function;
type EmitterEvent = {
	eventName: string;
	data: unknown;
};

class Application {
	protected _productApi: ProductApi;
	protected _events: EventEmitter;
	protected settings: object;
	protected root: HTMLElement;
	protected _homePage: HomePage;
	protected _basketView: BasketView;
	protected _orderView: OrderView<IOrder>;
	protected _contactsView: ContactsView;
	protected _productView: ProductView;
	protected _successView: SuccessView;
	protected static _instance: Application | null = null;
	static getInstance(): Application {
		return this._instance;
	}
	// constructor(settings: object) {}
	// run(): void {}
}
