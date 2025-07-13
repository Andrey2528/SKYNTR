import React, { useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import './styles/navbar.scss';
import SvgController from '@/shared/components/svgController';
import {
    PAGE_HOME,
    PAGE_RUNE_EVERY_DAY,
    PAGE_PORTFOLIO,
    PAGE_ABOUT,
} from '@/router/routes';
import LanguageSwitcher from './LanguageSwitcher';
import RunePortal from '@/features/particles/components/runePortal';

// Navigation menu configuration
const MENU_ITEMS = [
    { name: 'main', labelKey: 'nav.main', icon: 'home', path: PAGE_HOME },
    {
        name: 'chronicles',
        labelKey: 'nav.chronicles',
        icon: 'chronicles',
        path: PAGE_PORTFOLIO,
    },
    {
        name: 'about',
        labelKey: 'nav.about',
        icon: 'about',
        path: PAGE_ABOUT,
    },
    {
        name: 'rune',
        labelKey: 'nav.rune',
        icon: 'about',
        path: PAGE_RUNE_EVERY_DAY,
    },
];

const NavbarAside = ({ collapsed, setCollapsed }) => {
    const { t } = useTranslation();

    // Memoize menu items to prevent unnecessary re-renders
    const menuItems = useMemo(() => MENU_ITEMS, []);

    // Calculate portal size based on collapsed state
    const portalSize = collapsed ? 90 : 200;
    const portalSpeed = 25;

    const handleToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <aside className={`dashboard__sidebar ${collapsed ? 'collapsed' : ''}`}>
            <NavLink
                to={PAGE_HOME}
                className="dashboard__sidebar__logo"
            >
                <div className="rune-portal-wrapper">
                    <RunePortal size={portalSize} speed={portalSpeed} collapsed={collapsed} />
                </div>
            </NavLink>

            <button
                className="dashboard__sidebar__toggle-btn"
                onClick={handleToggle}
                aria-label={collapsed ? 'Expand menu' : 'Collapse menu'}
            >
                <SvgController
                    name={collapsed ? 'arrow-right' : 'arrow-left'}
                    clasName="dashboard__sidebar__menu-icon"
                />
            </button>

            <nav className="dashboard__sidebar__nav">
                <ul className="dashboard__sidebar__menu">
                    {menuItems.map((item) => (
                        <NavLink
                            to={item.path}
                            key={item.name}
                            className={({ isActive }) =>
                                `dashboard__sidebar__menu-item ${isActive ? 'active' : ''}`
                            }
                            title={collapsed ? t(item.labelKey) : undefined}
                        >
                            <span className="dashboard__sidebar__menu-icon">
                                <SvgController name={item.icon} />
                            </span>
                            <span className="sidebar__menu-label">
                                {t(item.labelKey)}
                            </span>
                        </NavLink>
                    ))}

                    <LanguageSwitcher />
                </ul>

                {/* RunePortal по центру панелі */}
                
            </nav>
        </aside>
    );
};

NavbarAside.propTypes = {
    collapsed: PropTypes.bool.isRequired,
    setCollapsed: PropTypes.func.isRequired,
};

export default NavbarAside;
