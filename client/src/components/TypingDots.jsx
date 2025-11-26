export default function TypingDots({ className = "" }) {
    return (
        <svg
            className={className}
            width="60"
            height="16"
            viewBox="0 0 60 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <circle cx="8" cy="8" r="5" fill="#9AA7D7">
                <animate attributeName="r" from="3" to="5" dur="0.9s" repeatCount="indefinite" begin="0s" />
                <animate attributeName="opacity" values="0.4;1;0.4" dur="0.9s" repeatCount="indefinite" begin="0s" />
            </circle>
            <circle cx="30" cy="8" r="5" fill="#9AA7D7">
                <animate attributeName="r" from="3" to="5" dur="0.9s" repeatCount="indefinite" begin="0.15s" />
                <animate attributeName="opacity" values="0.4;1;0.4" dur="0.9s" repeatCount="indefinite" begin="0.15s" />
            </circle>
            <circle cx="52" cy="8" r="5" fill="#9AA7D7">
                <animate attributeName="r" from="3" to="5" dur="0.9s" repeatCount="indefinite" begin="0.3s" />
                <animate attributeName="opacity" values="0.4;1;0.4" dur="0.9s" repeatCount="indefinite" begin="0.3s" />
            </circle>
        </svg>
    );
}
 