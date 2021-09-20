import { Route } from "@angular/router";
import { HomeComponent } from "./home.component";


export const HomeRoutes: Route[] = [
	{
		//path 
		path: '',
		//what exactly we are going to connect
		component: HomeComponent
	}
];