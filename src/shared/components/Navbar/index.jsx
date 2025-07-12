import React, { useState } from 'react';
import '@/styles/index.scss';
import SvgController from '@/utils/svgColntoller';
import { NavLink } from 'react-router-dom';
import { PAGE_HOME, PAGE_RUNE_EVERY_DAY } from '@/router/routes';

import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const NavbarAside = ({ collapsed, setCollapsed }) => {
    const { t, i18n } = useTranslation();

    const menu = [
        { name: 'main', labelKey: 'nav.main', icon: 'home', path: PAGE_HOME },
        {
            name: 'chronicles',
            labelKey: 'nav.chronicles',
            icon: 'chronicles',
            path: '/chronicles',
        },
        { name: 'about', labelKey: 'nav.about', icon: 'about', path: '/about' },
        {
            name: 'rune',
            labelKey: 'nav.rune',
            icon: 'about',
            path: PAGE_RUNE_EVERY_DAY,
        },
    ];

    return (
        <aside className={`dashboard__sidebar ${collapsed ? 'collapsed' : ''}`}>
            <div className="dashboard__sidebar__logo">
                {collapsed ? 'S' : 'SKYNTR'}
            </div>

            <button
                className="dashboard__sidebar__toggle-btn"
                onClick={() => setCollapsed(!collapsed)}
                aria-label={collapsed ? 'Expand menu' : 'Collapse menu'}
            >
                <SvgController
                    name={collapsed ? 'arrow-right' : 'arrow-left'}
                    clasName="dashboard__sidebar__menu-icon"
                />
            </button>

            <nav className="dashboard__sidebar__nav">
                <ul className="dashboard__sidebar__menu">
                    {menu.map((item) => (
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
            </nav>
        </aside>
    );
};

export default NavbarAside;
