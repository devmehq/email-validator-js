/**
 * Browser-compatible email validator
 * This is a mock implementation - in production, you would bundle the serverless core
 */

// Mock implementation for demonstration
export async function validateEmailCore(email, options = {}) {
    // Simulate API call to serverless function
    const response = await fetch('/api/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, options })
    }).catch(() => {
        // Fallback to local validation if API is not available
        return mockValidation(email);
    });
    
    if (response && response.ok) {
        const data = await response.json();
        return data.data;
    }
    
    return mockValidation(email);
}

export async function validateEmailBatch(emails, options = {}) {
    // Simulate API call to serverless function
    const response = await fetch('/api/validate/batch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emails, options })
    }).catch(() => {
        // Fallback to local validation if API is not available
        return Promise.all(emails.map(email => mockValidation(email)));
    });
    
    if (response && response.ok) {
        const data = await response.json();
        return data.data;
    }
    
    return Promise.all(emails.map(email => mockValidation(email)));
}

// Mock validation for demo purposes
function mockValidation(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid = emailRegex.test(email);
    const [local, domain] = email.split('@');
    
    const result = {
        valid,
        email: email.toLowerCase(),
        local,
        domain,
        validators: {
            syntax: { valid }
        }
    };
    
    // Check for common typos
    const typos = {
        'gmial.com': 'gmail.com',
        'gmai.com': 'gmail.com',
        'yahooo.com': 'yahoo.com',
        'yaho.com': 'yahoo.com',
        'hotmial.com': 'hotmail.com',
        'outlok.com': 'outlook.com'
    };
    
    if (domain && typos[domain]) {
        result.validators.typo = {
            valid: false,
            suggestion: typos[domain]
        };
    } else {
        result.validators.typo = { valid: true };
    }
    
    // Check disposable
    const disposable = ['mailinator.com', 'tempmail.com', '10minutemail.com'];
    result.validators.disposable = {
        valid: !disposable.includes(domain)
    };
    
    // Check free providers
    const freeProviders = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
    result.validators.free = {
        valid: !freeProviders.includes(domain)
    };
    
    // Overall valid status
    result.valid = Object.values(result.validators).every(v => v.valid !== false);
    
    return result;
}