import { ReactNode } from "react"
import { Provider } from "react-redux";
import store from "../../store";
import { BrowserRouter } from "react-router-dom";
import { RenderOptions, render } from "@testing-library/react";

interface IProvedores {
    children: ReactNode;
}

const provedores = ({ children }: IProvedores) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                { children }
            </BrowserRouter>
        </Provider>
    )
}

export const renderComProvedores = (ui: ReactNode, options?: RenderOptions) => render(ui, {wrapper: provedores, ...options})
export { renderComProvedores as render }