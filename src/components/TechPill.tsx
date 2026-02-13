import { getTechIcon } from "@/utils/techIcons";

interface TechPillProps {
    tech: string;
    showIcon?: boolean;
    className?: string; // Allow overrides if needed
}

const TechPill = ({ tech, showIcon = true, className = "" }: TechPillProps) => {
    return (
        <span
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700 shadow-sm ${className}`}
        >
            {showIcon && (
                <span className="text-blue-500 dark:text-blue-400 text-sm">
                    {getTechIcon(tech)}
                </span>
            )}
            {tech}
        </span>
    );
};

export default TechPill;
