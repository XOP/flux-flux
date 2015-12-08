/**
 * Random ID generator
 * @returns {string}
 */

export default function(len) {
    return '_' + Math.random().toString(36).substr(2, len || 5);
}
