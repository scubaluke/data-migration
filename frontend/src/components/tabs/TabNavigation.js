import './TabNavigation.css'

function TabNavigation({
    tabItems,
    activeTab,
    selectedTabIndex,
    clickHandler,
    keyPressHandler,
}) {
    const renderedTabs = tabItems.map((tab, index) => (
        <li
            key={index}
            id={tab.id}
            role='presentation'
            className={
                tab.id === activeTab
                    ? 'tabs__navigation active'
                    : 'tabs__navigation'
            }
            onClick={() => clickHandler(tab)}
        >
            <button
                className='btn tabs__navigation'
                role='tab'
                aria-controls={tab.id}
                tabIndex={selectedTabIndex === index ? 0 : -1}
                ref={tab.ref}
            >
                {tab.name}
            </button>
        </li>
    ));

    return (
        <ul
            className='tabs__navigation'
            role='tablist'
            aria-label='List of Tabs'
            onKeyDown={(e) => keyPressHandler(e, selectedTabIndex)}
        >
            {renderedTabs}
        </ul>
    );
}


export default TabNavigation;

