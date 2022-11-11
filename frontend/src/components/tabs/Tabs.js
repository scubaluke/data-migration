import { useState, lazy, Suspense, useRef, useCallback } from 'react';
import TabNavigation from './TabNavigation';
import './Tabs.css'
// import ErrorBoundary from '../errorBoundary';
// import DataStructureMethod from '../reports/DataStructureMethod';

function Tabs({ tabName, defaultComponent, pageData, tabItems }) {
    const [activeTab, setActiveTab] = useState(defaultComponent.id);
    const [title, setTitle] = useState(defaultComponent.name);
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    let Component = useRef();

    const loadComponent = (tabName) => {
        return lazy(() =>
            import(`../reports/${tabName}`)
        );
    };
    let InitialComponent = loadComponent(defaultComponent.id);

    const navClickHandler = useCallback(
        ({ id: inputComponent, name }) => {
            Component.current = loadComponent(inputComponent);
            setActiveTab(inputComponent);
            setTitle(name);
        },
        [setActiveTab]
    );

    // implemented keyboard navigation on arrow key press for accessibility

    const updateRenderedTab = (tab, index) => {
        Component.current = loadComponent(tab.id);
        setActiveTab(tab.id);
        setTitle(tab.name);
        setSelectedTabIndex(index);
        tabItems[index].ref.current.focus();
    };

    const keyPressHandler = useCallback(
        (e, selectedTabIndex) => {
            const nextTab = tabItems[selectedTabIndex + 1];
            const prevTab = tabItems[selectedTabIndex - 1];
            const firstTab = tabItems[0];
            const lastTab = tabItems[tabItems.length - 1];
            if (e.key === 'ArrowLeft') {
                if (selectedTabIndex !== 0) {
                    updateRenderedTab(prevTab, selectedTabIndex - 1);
                } else {
                    updateRenderedTab(lastTab, tabItems.length - 1);
                }
            } else if (e.key === 'ArrowRight') {
                if (selectedTabIndex !== tabItems.length - 1) {
                    updateRenderedTab(nextTab, selectedTabIndex + 1);
                } else {
                    updateRenderedTab(firstTab, 0);
                }
            }
        },
        [setActiveTab]
    );

    return (
        <div className='tabs' id='tabs'>

            <TabNavigation
                tabItems={tabItems}
                activeTab={activeTab}
                clickHandler={navClickHandler}
                keyPressHandler={keyPressHandler}
                selectedTabIndex={selectedTabIndex}
            />
            <section
                className='tabs-panel'
                role='tabpanel'
                aria-labelledby={activeTab}
            >
                <h2>{title}</h2>
                {/* <ErrorBoundary> */}
                <Suspense fallback={<div>Loading...</div>}>
                    {!Component.current ? (
                        <InitialComponent
                            pageData={pageData}
                            children={<div>Hi</div>}
                        />
                    ) : (
                        <Component.current
                            pageData={pageData}
                            children={<div>Hi</div>}
                        />
                    )}
                </Suspense>
                {/* </ErrorBoundary> */}
            </section>
        </div>
    );
}



export default Tabs;

