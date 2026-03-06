export type PointStatus = 'pass' | 'running' | 'cooming'

export type DateRange = {
    start: string
    end: string
}

const toWibBoundaryUtc = (date: string, endOfDay = false): number => {
    const [year, month, day] = date.split('-').map(Number)

    if (endOfDay) {
        return Date.UTC(year, month - 1, day, 16, 59, 59, 999)
    }

    return Date.UTC(year, month - 1, day, -7, 0, 0, 0)
}

export const getPointStatus = (periods: DateRange[]): PointStatus => {
    const now = Date.now()

    const normalizedPeriods = periods.map((period) => ({
        start: toWibBoundaryUtc(period.start, false),
        end: toWibBoundaryUtc(period.end, true),
    }))

    const isRunning = normalizedPeriods.some((period) => now >= period.start && now <= period.end)

    if (isRunning) {
        return 'running'
    }

    const latestEnd = Math.max(...normalizedPeriods.map((period) => period.end))

    if (now > latestEnd) {
        return 'pass'
    }

    return 'cooming'
}
