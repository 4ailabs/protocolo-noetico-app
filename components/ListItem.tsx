import React, { useState } from 'react';
import { appConfig } from '../constants';

interface ListItemProps {
    text: string;
    badge?: string | number;
    isSelected: boolean;
    onClick: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ text, badge, isSelected, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const C = appConfig.colors;

    const baseClasses = `py-2.5 px-3.5 text-base rounded-md transition-all duration-200 ease-in-out cursor-pointer flex justify-between items-center border-l-4`;
    
    let currentClasses = `${baseClasses} ${appConfig.colors.textSecondary}`;

    if (isSelected) {
        currentClasses = `${baseClasses} bg-gradient-to-r ${C.wizardSelectedBgGradientFrom} ${C.wizardSelectedBgGradientTo} text-white ${C.wizardSelectedBorder}`;
    } else if (isHovered) {
        currentClasses = `${baseClasses} ${C.wizardHoverBg} text-gray-100 border-l-transparent hover:translate-x-1`;
    } else {
         currentClasses = `${baseClasses} text-gray-200 border-l-transparent`; // Slightly lighter default text
    }

    return (
        <div 
            className={currentClasses}
            onClick={onClick} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && onClick()}
            aria-pressed={isSelected}
        >
            <span>{text}</span>
            {badge && <span className={`font-mono text-sm ${isSelected ? 'text-white' : `text-${C.secondaryAccent}`}`}>{badge}</span>}
        </div>
    );
};

export default ListItem;